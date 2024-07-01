
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGhost from "../../src/components/MdiGhost.vue";

test("MdiGhost snapshot", () => {
  const wrapper = mount(MdiGhost, {});
  expect(wrapper.html()).toMatchSnapshot();
});

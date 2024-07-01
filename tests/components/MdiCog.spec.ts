
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCog from "../../src/components/MdiCog.vue";

test("MdiCog snapshot", () => {
  const wrapper = mount(MdiCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});

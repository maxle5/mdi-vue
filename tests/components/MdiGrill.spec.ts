
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGrill from "../../src/components/MdiGrill.vue";

test("MdiGrill snapshot", () => {
  const wrapper = mount(MdiGrill, {});
  expect(wrapper.html()).toMatchSnapshot();
});

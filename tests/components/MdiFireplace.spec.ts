
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireplace from "../../src/components/MdiFireplace.vue";

test("MdiFireplace snapshot", () => {
  const wrapper = mount(MdiFireplace, {});
  expect(wrapper.html()).toMatchSnapshot();
});

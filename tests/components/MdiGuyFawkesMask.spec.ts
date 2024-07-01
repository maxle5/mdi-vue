
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGuyFawkesMask from "../../src/components/MdiGuyFawkesMask.vue";

test("MdiGuyFawkesMask snapshot", () => {
  const wrapper = mount(MdiGuyFawkesMask, {});
  expect(wrapper.html()).toMatchSnapshot();
});

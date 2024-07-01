
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiContentSavePlus from "../../src/components/MdiContentSavePlus.vue";

test("MdiContentSavePlus snapshot", () => {
  const wrapper = mount(MdiContentSavePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});

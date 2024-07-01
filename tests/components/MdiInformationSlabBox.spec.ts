
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationSlabBox from "../../src/components/MdiInformationSlabBox.vue";

test("MdiInformationSlabBox snapshot", () => {
  const wrapper = mount(MdiInformationSlabBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});

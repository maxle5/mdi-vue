
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationSlabCircleOutline from "../../src/components/MdiInformationSlabCircleOutline.vue";

test("MdiInformationSlabCircleOutline snapshot", () => {
  const wrapper = mount(MdiInformationSlabCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

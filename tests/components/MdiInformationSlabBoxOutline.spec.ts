
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationSlabBoxOutline from "../../src/components/MdiInformationSlabBoxOutline.vue";

test("MdiInformationSlabBoxOutline snapshot", () => {
  const wrapper = mount(MdiInformationSlabBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

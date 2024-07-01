
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationVariantCircleOutline from "../../src/components/MdiInformationVariantCircleOutline.vue";

test("MdiInformationVariantCircleOutline snapshot", () => {
  const wrapper = mount(MdiInformationVariantCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationVariantBoxOutline from "../../src/components/MdiInformationVariantBoxOutline.vue";

test("MdiInformationVariantBoxOutline snapshot", () => {
  const wrapper = mount(MdiInformationVariantBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

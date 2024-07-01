
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationVariantBox from "../../src/components/MdiInformationVariantBox.vue";

test("MdiInformationVariantBox snapshot", () => {
  const wrapper = mount(MdiInformationVariantBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});

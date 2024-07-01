
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInformationVariant from "../../src/components/MdiInformationVariant.vue";

test("MdiInformationVariant snapshot", () => {
  const wrapper = mount(MdiInformationVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});

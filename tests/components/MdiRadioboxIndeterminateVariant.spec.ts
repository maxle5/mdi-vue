
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadioboxIndeterminateVariant from "../../src/components/MdiRadioboxIndeterminateVariant.vue";

test("MdiRadioboxIndeterminateVariant snapshot", () => {
  const wrapper = mount(MdiRadioboxIndeterminateVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});

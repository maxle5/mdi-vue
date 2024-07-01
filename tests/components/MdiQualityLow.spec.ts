
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQualityLow from "../../src/components/MdiQualityLow.vue";

test("MdiQualityLow snapshot", () => {
  const wrapper = mount(MdiQualityLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});

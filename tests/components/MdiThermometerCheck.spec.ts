
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerCheck from "../../src/components/MdiThermometerCheck.vue";

test("MdiThermometerCheck snapshot", () => {
  const wrapper = mount(MdiThermometerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});

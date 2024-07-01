
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardMarkerOutline from "../../src/components/MdiCreditCardMarkerOutline.vue";

test("MdiCreditCardMarkerOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});

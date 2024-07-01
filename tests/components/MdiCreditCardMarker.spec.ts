
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardMarker from "../../src/components/MdiCreditCardMarker.vue";

test("MdiCreditCardMarker snapshot", () => {
  const wrapper = mount(MdiCreditCardMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});

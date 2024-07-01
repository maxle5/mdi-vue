
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashMarker from "../../src/components/MdiCashMarker.vue";

test("MdiCashMarker snapshot", () => {
  const wrapper = mount(MdiCashMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});

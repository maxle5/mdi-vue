
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneMarker from "../../src/components/MdiCellphoneMarker.vue";

test("MdiCellphoneMarker snapshot", () => {
  const wrapper = mount(MdiCellphoneMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});

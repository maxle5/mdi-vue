
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneSound from "../../src/components/MdiCellphoneSound.vue";

test("MdiCellphoneSound snapshot", () => {
  const wrapper = mount(MdiCellphoneSound, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphonePlay from "../../src/components/MdiCellphonePlay.vue";

test("MdiCellphonePlay snapshot", () => {
  const wrapper = mount(MdiCellphonePlay, {});
  expect(wrapper.html()).toMatchSnapshot();
});

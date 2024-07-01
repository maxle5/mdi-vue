
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowDownBoldCircle from "../../src/components/MdiArrowDownBoldCircle.vue";

test("MdiArrowDownBoldCircle snapshot", () => {
  const wrapper = mount(MdiArrowDownBoldCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});

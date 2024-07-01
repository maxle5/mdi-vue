
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowUpBoldCircle from "../../src/components/MdiArrowUpBoldCircle.vue";

test("MdiArrowUpBoldCircle snapshot", () => {
  const wrapper = mount(MdiArrowUpBoldCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});

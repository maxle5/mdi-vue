
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLeafCircle from "../../src/components/MdiLeafCircle.vue";

test("MdiLeafCircle snapshot", () => {
  const wrapper = mount(MdiLeafCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarInfo from "../../src/components/MdiCarInfo.vue";

test("MdiCarInfo snapshot", () => {
  const wrapper = mount(MdiCarInfo, {});
  expect(wrapper.html()).toMatchSnapshot();
});

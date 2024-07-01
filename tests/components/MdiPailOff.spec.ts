
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPailOff from "../../src/components/MdiPailOff.vue";

test("MdiPailOff snapshot", () => {
  const wrapper = mount(MdiPailOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});

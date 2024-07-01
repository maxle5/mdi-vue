
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToasterOff from "../../src/components/MdiToasterOff.vue";

test("MdiToasterOff snapshot", () => {
  const wrapper = mount(MdiToasterOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});

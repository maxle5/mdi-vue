
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCctvOff from "../../src/components/MdiCctvOff.vue";

test("MdiCctvOff snapshot", () => {
  const wrapper = mount(MdiCctvOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});

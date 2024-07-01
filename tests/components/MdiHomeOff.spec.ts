
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeOff from "../../src/components/MdiHomeOff.vue";

test("MdiHomeOff snapshot", () => {
  const wrapper = mount(MdiHomeOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCast from "../../src/components/MdiCast.vue";

test("MdiCast snapshot", () => {
  const wrapper = mount(MdiCast, {});
  expect(wrapper.html()).toMatchSnapshot();
});

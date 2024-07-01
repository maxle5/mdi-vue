
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetNone from "../../src/components/MdiSetNone.vue";

test("MdiSetNone snapshot", () => {
  const wrapper = mount(MdiSetNone, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetLeft from "../../src/components/MdiSetLeft.vue";

test("MdiSetLeft snapshot", () => {
  const wrapper = mount(MdiSetLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});

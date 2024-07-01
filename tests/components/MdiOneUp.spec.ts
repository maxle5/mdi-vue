
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOneUp from "../../src/components/MdiOneUp.vue";

test("MdiOneUp snapshot", () => {
  const wrapper = mount(MdiOneUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});

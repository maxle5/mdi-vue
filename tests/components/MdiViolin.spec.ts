
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViolin from "../../src/components/MdiViolin.vue";

test("MdiViolin snapshot", () => {
  const wrapper = mount(MdiViolin, {});
  expect(wrapper.html()).toMatchSnapshot();
});

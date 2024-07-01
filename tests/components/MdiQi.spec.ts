
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiQi from "../../src/components/MdiQi.vue";

test("MdiQi snapshot", () => {
  const wrapper = mount(MdiQi, {});
  expect(wrapper.html()).toMatchSnapshot();
});

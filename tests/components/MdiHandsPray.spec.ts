
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandsPray from "../../src/components/MdiHandsPray.vue";

test("MdiHandsPray snapshot", () => {
  const wrapper = mount(MdiHandsPray, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiConsoleLine from "../../src/components/MdiConsoleLine.vue";

test("MdiConsoleLine snapshot", () => {
  const wrapper = mount(MdiConsoleLine, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShareAll from "../../src/components/MdiShareAll.vue";

test("MdiShareAll snapshot", () => {
  const wrapper = mount(MdiShareAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});

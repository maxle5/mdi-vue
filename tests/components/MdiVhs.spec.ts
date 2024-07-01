
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVhs from "../../src/components/MdiVhs.vue";

test("MdiVhs snapshot", () => {
  const wrapper = mount(MdiVhs, {});
  expect(wrapper.html()).toMatchSnapshot();
});

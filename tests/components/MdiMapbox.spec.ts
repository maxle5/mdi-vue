
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapbox from "../../src/components/MdiMapbox.vue";

test("MdiMapbox snapshot", () => {
  const wrapper = mount(MdiMapbox, {});
  expect(wrapper.html()).toMatchSnapshot();
});

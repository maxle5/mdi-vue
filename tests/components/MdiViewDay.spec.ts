
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewDay from "../../src/components/MdiViewDay.vue";

test("MdiViewDay snapshot", () => {
  const wrapper = mount(MdiViewDay, {});
  expect(wrapper.html()).toMatchSnapshot();
});

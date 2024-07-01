
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCogs from "../../src/components/MdiCogs.vue";

test("MdiCogs snapshot", () => {
  const wrapper = mount(MdiCogs, {});
  expect(wrapper.html()).toMatchSnapshot();
});

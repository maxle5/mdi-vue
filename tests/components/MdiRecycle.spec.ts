
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRecycle from "../../src/components/MdiRecycle.vue";

test("MdiRecycle snapshot", () => {
  const wrapper = mount(MdiRecycle, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShredder from "../../src/components/MdiShredder.vue";

test("MdiShredder snapshot", () => {
  const wrapper = mount(MdiShredder, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPump from "../../src/components/MdiPump.vue";

test("MdiPump snapshot", () => {
  const wrapper = mount(MdiPump, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVlc from "../../src/components/MdiVlc.vue";

test("MdiVlc snapshot", () => {
  const wrapper = mount(MdiVlc, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrangeSendToBack from "../../src/components/MdiArrangeSendToBack.vue";

test("MdiArrangeSendToBack snapshot", () => {
  const wrapper = mount(MdiArrangeSendToBack, {});
  expect(wrapper.html()).toMatchSnapshot();
});

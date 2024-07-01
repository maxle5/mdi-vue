
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileSend from "../../src/components/MdiFileSend.vue";

test("MdiFileSend snapshot", () => {
  const wrapper = mount(MdiFileSend, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLanDisconnect from "../../src/components/MdiLanDisconnect.vue";

test("MdiLanDisconnect snapshot", () => {
  const wrapper = mount(MdiLanDisconnect, {});
  expect(wrapper.html()).toMatchSnapshot();
});

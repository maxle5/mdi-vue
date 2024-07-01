
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRaspberryPi from "../../src/components/MdiRaspberryPi.vue";

test("MdiRaspberryPi snapshot", () => {
  const wrapper = mount(MdiRaspberryPi, {});
  expect(wrapper.html()).toMatchSnapshot();
});


import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDocker from "../../src/components/MdiDocker.vue";

test("MdiDocker snapshot", () => {
  const wrapper = mount(MdiDocker, {});
  expect(wrapper.html()).toMatchSnapshot();
});

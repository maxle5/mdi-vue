
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRobotExcited from "../../src/components/MdiRobotExcited.vue";

test("MdiRobotExcited snapshot", () => {
  const wrapper = mount(MdiRobotExcited, {});
  expect(wrapper.html()).toMatchSnapshot();
});
